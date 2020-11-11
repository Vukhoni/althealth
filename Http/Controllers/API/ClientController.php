<?php

namespace App\Http\Controllers\API;

use App\Client;
use App\BirthDay;
use App\Http\Resources\BirthDayCollection;
use \App\Http\Resources\Client as ClientResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\ClientRequest;
use App\Http\Resources\ClientCollection;
use App\Http\Resources\IncompleteClientCollection;
use App\Http\Resources\TopTenClientCollection;
use App\TopTenClient;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return new ClientCollection(Client::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClientRequest $request)
    {
        //
        $validated = $request->validated();
        $item = [
            'Client_id' =>$validated['ID'] ,
            'C_name' =>$validated['Name'],
            'C_surname' =>$validated['Surname'],
            'Address' =>$validated['Address'],
            'Code' => $validated['Code'],
            'C_Tel_C' =>$validated['Cellphone'],
            'C_Tel_H' =>$validated['Telephone'],
            'C_Tel_W' => $validated['Workphone'],
            'Email' => $validated['Email'],
            'ReferenceID' => $validated['ReferenceID'],
        ];
        $client = new Client($item);
        $client->save();
        $client->refresh();
        return new ClientResource($client);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $client = Client::query()->findOrFail([
            'Client_id'=> $id
        ]);
        return new ClientResource($client);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ClientRequest $request, $id)
    {
        //
        $validated = $request->validated();
        $client = Client::query()->findOrFail([
            'Client_id'=> $id
        ])->first();
        $item = [
            'Client_id' =>$validated['ID'] ,
            'C_name' =>$validated['Name'],
            'C_surname' =>$validated['Surname'],
            'Address' =>$validated['Address'],
            'Code' => $validated['Code'],
            'C_Tel_C' =>$validated['Cellphone'],
            'C_Tel_H' =>$validated['Telephone'],
            'C_Tel_W' => $validated['Workphone'],
            'Email' => $validated['Email'],
            'ReferenceID' => $validated['ReferenceID'],
        ];
        $client->fill($item);
        $client->save();
        $client->refresh();
        return new ClientResource($client);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $client = Client::query()->find($id);
        $client->delete();
        return response()->noContent();
    }
    public function Birthdays()
    {
        return new BirthDayCollection(BirthDay::all());
    }
    public function TopTenClients()
    {
        return new TopTenClientCollection(TopTenClient::all());
    }
    public function IncompleteClients()
    {
        return new IncompleteClientCollection(\App\IncompleteClient::all());
    }
}
