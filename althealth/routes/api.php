<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClientController;
use App\Http\Controllers\API\SupplierController;
use App\Http\Controllers\API\PurchasesController;
use App\Http\Controllers\API\ReferenceController;
use App\Http\Controllers\API\SupplementController;
use App\Http\Controllers\API\TopTenClientController;
use App\Http\Controllers\API\IncompleteClientController;
use App\Http\Controllers\Api\InvoiceController;
use App\Http\Controllers\API\UnpaidInvoiceController;
use App\Http\Controllers\API\LowStockController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources([
    'references' => ReferenceController::class,

]);


Route::group(['middleware' => 'auth:api'], function () {
    Route::apiResources([
        'clients' => ClientController::class,
        'incompleteclients' => IncompleteClientController::class,
        'toptenclients' => TopTenClientController::class,
        'suppliers' => SupplierController::class,
        'supplements' => SupplementController::class,
        'monthlyPurchases' => PurchasesController::class,
        'invoices' => InvoiceController::class,
        'unpaidinvoices' => UnpaidInvoiceController::class,
        'lowstocks' => LowStockController::class
    ]);
    Route::get('/birthdays', [ClientController::class, 'Birthdays']);
    Route::get('/invoiceitems', [InvoiceController::class, 'items']);
});
