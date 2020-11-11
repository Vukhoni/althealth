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
            'ID' => 'required|numeric|max:15',
            'Description' => 'required|max:30',
            'Cost' => 'numeric|required',
            'Price' => 'numeric|required',
            'MinLevel' => 'numeric|required',
            'CurrentLevel' => 'numeric|required',
            'NappiCode' =>'required|max:20',
            'SupplierID' => 'required|max:14',
        ];
    }
}
