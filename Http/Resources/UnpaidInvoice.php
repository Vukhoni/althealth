<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UnpaidInvoice extends JsonResource
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
            'ClientID' => $this->CLIENT_ID,
            'TopTenClient' => $this->CLIENT,
            'InvoiceNumber'=> $this->INVOICE_NUMBER,
            'Date' =>$this->INVOICE_DATE
        ];
    }
}
