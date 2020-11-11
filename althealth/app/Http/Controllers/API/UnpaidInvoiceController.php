<?php

namespace App\Http\Controllers\API;

use App\Client;
use App\Http\Controllers\Controller;
use App\Http\Resources\UnpaidInvoiceCollection;
use App\UnpaidInvoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UnpaidInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        if (Auth::user()->is_employee) {
            return new UnpaidInvoiceCollection(UnpaidInvoice::all());
        } else {

            return new UnpaidInvoiceCollection(UnpaidInvoice::where('CLIENT_ID', Client::where('C_Email', Auth::user()->email)->first()->Client_id)->get());
        }
    }
}
