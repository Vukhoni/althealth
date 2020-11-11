<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    private function luhn($number)
    {
        $sumTable = array(
            array(0,1,2,3,4,5,6,7,8,9),
            array(0,2,4,6,8,1,3,5,7,9));
        $sum = 0;
        $flip = 0;
        for ($i = strlen($number) - 1; $i >= 0; $i--) {
            $sum += $sumTable[$flip++ & 0x1][$number[$i]];
        }
        return $sum % 10 === 0;
    }
    public function authorize()
    {

        return true;
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $id = $this->post('ID');
            if ($this->luhn($id))
            {
                return;
            }
            else
            {
                $validator->errors()->add('ID', 'Invalid SA ID');
            }
        });
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ID' => 'required|numeric|min:13|max:13',
            'Name' => 'required|max:30',
            'Surname'=> 'required|max:30',
            'Address' =>'required|max:200',
            'Code' => 'required|size:4',
            'Telephone' => 'size:12|regex:^(\\d{4})-(\\d{3})-(\\d{3})',
            'Workphone' => 'size:12|regex:^(\\d{4})-(\\d{3})-(\\d{3})',
            'Cellphone'=> 'size:12|regex:^(\\d{4})-(\\d{3})-(\\d{3})',
            'Email' => 'required|email|size:200',
            'ReferenceID' => 'required',
        ];
    }
}
