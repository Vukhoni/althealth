<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SupplementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
            'ID' => 'required|numeric|max:20',
            'Contact' => 'required|max:30',
            'Telephone' => 'size:12|regex:^(\\d{4})-(\\d{3})-(\\d{3})',
            'Email' => 'required|email|size:50',
            'Bank' =>'required|max:30',
            'BankCode' => 'required|max:10',
            'BankNumber' => 'required|max:30',
            'AccountType'=> 'required|max:30',
        ];
    }
}
