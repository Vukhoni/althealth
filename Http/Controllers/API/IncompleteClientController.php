<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\IncompleteClientCollection;
use Illuminate\Http\Request;

class IncompleteClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new IncompleteClientCollection(\App\IncompleteClient::all());
    }
}
