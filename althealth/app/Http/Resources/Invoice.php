<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\InvoiceItemCollection;

class Invoice extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'InvoiceNumber' => $this->Inv_Num,
            'Date' => $this->Inv_Date,
            'IsPaid' => $this->Inv_Paid,
            'SettledDate' => $this->Inv_Paid_date,
            'Comment' => $this->Comment,
            'Client' => $this->Client_id,            
            'ClientDetails' => new Client($this->client),
        ];
    }
}
