<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UnpaidInvoice extends Model
{
    //
    protected $table = 'unpaid_invoices';
    public $timestamps = false;
}
