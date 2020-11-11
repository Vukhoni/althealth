<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IncompleteClient extends Model
{
    //
    protected $table = 'missing_client_info';
    protected $primaryKey = 'CLIENT';
    public $incrementing = false;
    public $timestamps = false;
    protected $keyType = 'string';
}
