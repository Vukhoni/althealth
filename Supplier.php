<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    //
    protected $table = 'tblSupplier_Info';
    protected $primaryKey = 'Supplier_ID';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';
}
