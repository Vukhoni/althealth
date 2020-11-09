<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SupplementCollection;
use App\Http\Resources\Supplement as SupplementResource;
use App\Http\Requests\SupplementRequest;
use App\Supplement;
use App\Supplier;
use Illuminate\Http\Request;

class SupplementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return new SupplementCollection(Supplement::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SupplementRequest $request)
    {
        //

        $validated = $request->validated();
        $item = [

            'Supplement_Description' => $validated['Description'],
            'Cost_excl' => $validated['Cost'],
            'Min_levels' => $validated['MinLevel'],
            'Current_stock_levels' => $validated['CurrentLevel'],
            'Nappi_code' => $validated['NappiCode'],
            'Supplier_ID' => $validated['SupplierID'],

        ];
        $supplement = new Supplement($item);
        $supplement->Cost_incl = $validated['Cost'] + ($validated['Cost'] * env('VAT'));
        $supplement->save();


        return new SupplementResource($supplement);
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
        $supplement = Supplement::query()->findOrFail([
            'Supplement_id' => $id
        ]);
        return new SupplementResource($supplement);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SupplementRequest $request, $id)
    {
        //

        $supplement = Supplement::query()->findOrFail([
            'Supplement_id' => $id
        ])->first();

        $validated = $request->validated();
        $item = [
            'Supplement_id' => $validated['ID'],
            'Supplement_Description' => $validated['Description'],
            'Cost_excl' => $validated['Cost'],
            'Min_levels' => $validated['MinLevel'],
            'Current_stock_levels' => $validated['CurrentLevel'],
            'Nappi_code' => $validated['NappiCode'],
            'Supplier_ID' => $validated['SupplierID'],

        ];
        $supplement->fill($item);
        $supplement->save();
        $supplement->refresh();
        return new SupplementResource($supplement);
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
        $supplement = Supplement::query()->find($id);
        $supplement->delete();
        return response()->noContent();
    }
}
