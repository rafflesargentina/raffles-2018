<?php

namespace Raffles\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Return a valid code 500 json response.
     *
     * @param string $message The response message.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function validCode500JsonResponse($message = 'Internal Server Error')
    {
        return response()->json(
            [
                'code' => '500',
                'message' => $message,
                'errors' => [],
            ], 500, [], JSON_PRETTY_PRINT
        );
    }
}
