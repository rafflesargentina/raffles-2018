<?php

namespace Raffles\Http\Requests;

use RafflesArgentina\ActionBasedFormRequest\ActionBasedFormRequest;


class AvatarRequest extends ActionBasedFormRequest
{
    /**
     * Get the validation rules that apply to the request for the update action.
     *
     * @return array
     */
    public static function update()
    {
        return [
            'file' => 'required|image|max:200',
        ];
    }
}
