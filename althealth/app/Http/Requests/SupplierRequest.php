<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SupplierRequest extends FormRequest
{

    public function authorize()
    {

        return true;
    }


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'ID' => 'required|max:20',
            'Contact' => 'required|max:30',
            'Telephone' => 'max:18|regex:/^\(\d{3}\)\-\(\d{3}\)\-\(\d{4}\)$/',
            'Email' => 'required|email|max:50',
            'Bank' => 'required|max:30',
            'BankCode' => 'required|max:10',
            'BankNumber' => 'required|max:30',
            'AccountType' => 'required|max:30',
        ];
    }
}
