<?php

use App\Client;
use App\Http\Middleware\VerifyCsrfToken;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post('/register', function (RegisterRequest $request) {
    try {
        DB::beginTransaction();
        $validated = $request->validated();
        $user = new User();
        $user->name = $validated['Name'];
        $user->email = $validated['Email'];
        $user->password = bcrypt($validated['Password']);
        $user->save();

        $client = new Client();
        $client['Client_id'] = $validated['ID'];
        $client['C_name'] = $validated['Name'];
        $client['C_surname'] = $validated['Surname'];
        $client['C_Email'] = $validated['Email'];
        $client['C_Tel_H'] = '';
        $client['C_Tel_W'] = '';
        $client['C_Tel_Cell'] = '';
        $client['Address'] = $validated['Address'];
        $client['Code'] = $validated['Code'];
        $client['Reference_ID'] = $validated['ReferenceID'];
        $client->save();
        DB::commit();
        Auth::login($user);
        $http = new GuzzleHttp\Client;

        $response = $http->post('http://www.althealth.co.za/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '91c46987-b558-423d-984d-4b0638c80cf8',
                'client_secret' => 'JVZa88I8pCxLJogUuNQOqr3ABfez5eBI40A9ewot',
                'username' => $request['Email'],
                'password' => $request['Password'],
                'scope' => '*'
            ],
        ]);

        return json_decode((string) $response->getBody(), true);
    } catch (\Throwable $th) {
        DB::rollBack();
        throw $th;
    }
});
Route::post('/login', function (Request $request) {

    if (Auth::attempt(['email' => $request['Email'], 'password' => $request['Password']])) {

        $http = new GuzzleHttp\Client;
        $response = $http->post('http://www.althealth.co.za/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '91c46987-b558-423d-984d-4b0638c80cf8',
                'client_secret' => 'JVZa88I8pCxLJogUuNQOqr3ABfez5eBI40A9ewot',
                'username' => $request['Email'],
                'password' => $request['Password'],
                'scope' => '*'
            ],
        ]);

        return json_decode((string) $response->getBody(), true);
    } else if (Auth::check()) {
        Auth::logout();
    }

    return response()->json('', 401, []);
});
Route::post('/logout', function () {

    Auth::logout();
})->middleware(['auth']);
