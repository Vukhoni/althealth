<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reference extends Model
{
    //
    protected $table = 'tblReference';
    protected $primaryKey = 'Reference_ID';

    public $timestamps = false;
}
