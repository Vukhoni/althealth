<?php

namespace App\Http\Controllers\Api;

use App\Client;
use Carbon\Carbon;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\InvoiceRequest;
use App\Http\Resources\InvoiceCollection;
use App\Http\Resources\InvoiceItemCollection;
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

        $date = Carbon::now()->format('yy-m-d');
        $client_id = Client::where('C_Email', Auth::user()->email)->first()->Client_id;
        DB::insert('INSERT INTO `altHealth`.`tblInv_Info` (`Inv_Date`, `Inv_Paid`, `Comment`, `Client_id`) VALUES (?, ?, ?, ?)', [$date, '', '', $client_id]);
        $invoice = Invoice::where([
            ['Inv_Date', $date,],
            ['Client_id', $client_id]
        ])->orderBy('Inv_Num', 'desc')->first();
        $items = $request->input();
        foreach ($items as $item) {
            DB::insert('INSERT INTO `altHealth`.`tblInv_Items` (`Inv_Num`, `Supplement_id`, `Item_price`, `Item_Quantity`) VALUES (?, ?, ?, ?)', [$invoice->Inv_Num, $item['ID'],  $item['Price'], $item['Quantity']]);
        }
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
    public function items()
    {
        //
        return new InvoiceItemCollection(InvoiceItem::all());
    }
}
