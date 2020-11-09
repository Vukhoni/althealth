<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    //
    protected $table = 'tblClientInfo';
    protected $primaryKey = 'Client_id';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';
}
