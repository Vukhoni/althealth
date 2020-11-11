<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UnpaidInvoiceCollection;
use App\UnpaidInvoice;
use Illuminate\Http\Request;

class UnpaidInvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UnpaidInvoiceCollection(UnpaidInvoice::all());
    }

}
