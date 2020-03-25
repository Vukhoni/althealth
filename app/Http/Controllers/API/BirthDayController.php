<?php

namespace App\Http\Controllers\API;

use App\BirthDay;
use App\Http\Controllers\Controller;
use App\Http\Resources\BirthDayCollection;
use Illuminate\Http\Request;

class BirthDayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return new BirthDayCollection(BirthDay::all());
    }
}
