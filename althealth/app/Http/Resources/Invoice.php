<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'Items' => new InvoiceItemCollection($this->items),
            'ClientDetails' => new Client($this->client),
        ];
    }
}
