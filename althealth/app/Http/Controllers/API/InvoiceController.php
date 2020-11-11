<?php

namespace App\Http\Controllers\Api;

use App\Client;
use Carbon\Carbon;
use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\InvoiceRequest;
use App\Http\Resources\InvoiceCollection;
use App\Http\Resources\Invoice as InvoiceResource;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        if (Auth::user()->is_employee) {
            return new InvoiceCollection(Invoice::all());
        } else {

            return new InvoiceCollection(Invoice::where('Client_id', Client::where('C_Email', Auth::user()->email)->first()->Client_id)->get());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //this is buying
        $invoice = new Invoice();
        $invoice->fill([
            'Inv_Date' => Carbon::now()->format('yy-m-d'),
            'Client_ID' => Client::where('email', Auth::user()->email)->Client_id
        ]);
        $invoice->save();
        $invoice->refresh();
        return new InvoiceResource($invoice);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        //
        return new InvoiceResource($invoice);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(InvoiceRequest $request, Invoice $invoice)
    {
        //this is for admin to say paid can't be changed by user

        $validated = $request->validated();
        $item = [
            'Comment' => $validated['Comment'],
            'Inv_Paid' => $validated['IsPaid'],
        ];
        $invoice->fill($item);
        if ($invoice->Inv_Paid === 'Y') {
            $invoice->Inv_Paid_date = Carbon::now()->format('yy-m-d');
        }
        if (!(strlen($invoice->Comment) > 0)) {
            $invoice->Comment = '';
        }
        $invoice->save();
        $invoice->refresh();
        return new InvoiceResource($invoice);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Invoice  $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        //
        $invoice->delete();
        return response()->noContent();
    }
}
