<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Supplier extends JsonResource
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
            'ID' => $this->Supplier_ID,
            'Contact' => $this->Contact_Person,
            'Telephone' => $this->Supplier_Tel,
            'Email' => $this->Supplier_Email,
            'Bank' => $this->Bank,
            'BankCode' => $this->Bank_code,
            'BankNumber' => $this->Supplier_BankNum,
            'AccountType' => $this->Supplier_Type_Bank_Account,
        ];
    }
}
