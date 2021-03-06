<?php

namespace Raffles\Http\Controllers;

use Raffles\Mail\ContactMessage;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $this->validate(
            $request, [
            'name' => 'required|max:100',
            'email' => 'required|email',
            'phone' => 'max:50',
            'message' => 'required',
            ]
        );

        try {
            Mail::to($request->email)->send(new ContactMessage($request->all()));
        }  catch(\Exception $e) {
            return $this->validCode500JsonResponse($e->getMessage());
        }

        return response()->json(['message' => 'OK'], 200);
    }
}
