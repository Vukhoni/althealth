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
            'ID' => 'max:15',
            'Description' => 'required|max:30',
            'Cost' => 'numeric|required',
            'MinLevel' => 'numeric|required',
            'CurrentLevel' => 'numeric|required',
            'NappiCode' => 'required|max:20',
            'SupplierID' => 'required|max:14',
        ];
    }
}
