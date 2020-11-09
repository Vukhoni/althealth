<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\SupplierCollection;
use App\Supplement;
use App\Supplier;
use App\Http\Requests\SupplierRequest;
use App\Http\Resources\Supplier as SupplierResource;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return new SupplierCollection(Supplier::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SupplierRequest $request)
    {
        //
        $validated = $request->validated();
        $item = [
            'Supplier_ID' => $validated['ID'],
            'Contact_Person' => $validated['Contact'],
            'Supplier_Tel' => $validated['Telephone'],
            'Supplier_Email' => $validated['Email'],
            'Bank' => $validated['Bank'],
            'Bank_code' => $validated['BankCode'],
            'Supplier_BankNum' => $validated['BankNumber'],
            'Supplier_Type_Bank_Account' => $validated['AccountType'],
        ];
        $supplier = new Supplier($item);
        $supplier->save();
        $supplier->refresh();
        return new SupplierResource($supplier);
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
        $supplier = Supplier::query()->findOrFail([
            'Supplier_ID' => $id
        ]);
        return new SupplierResource($supplier);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SupplierRequest $request, $id)
    {
        //
        $validated = $request->validated();
        $supplier = Supplier::query()->findOrFail([
            'Supplier_ID' => $id
        ])->first();

        $item = [
            'Supplier_ID' => $validated['ID'],
            'Contact_Person' => $validated['Contact'],
            'Supplier_Tel' => $validated['Telephone'],
            'Supplier_Email' => $validated['Email'],
            'Bank' => $validated['Bank'],
            'Bank_code' => $validated['BankCode'],
            'Supplier_BankNum' => $validated['BankNumber'],
            'Supplier_Type_Bank_Account' => $validated['AccountType'],
        ];
        $supplier->fill($item);
        $supplier->save();
        $supplier->refresh();
        return new SupplierResource($supplier);
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
        $supplier = Supplier::query()->find($id);
        $supplier->delete();
        return response()->noContent();
    }
}
