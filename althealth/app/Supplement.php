<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplement extends Model
{
    //
    protected $table = 'tblSupplements';
    protected $primaryKey = 'Supplement_id';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';
}
