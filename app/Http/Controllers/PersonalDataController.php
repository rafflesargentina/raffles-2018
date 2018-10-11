<?php

namespace Raffles\Http\Controllers;

use Raffles\Http\Requests\PersonalDataRequest;
use Raffles\Repositories\UserRepository;

use RafflesArgentina\ResourceController\ResourceController;

class PersonalDataController extends ResourceController
{
    protected $formRequest = PersonalDataRequest::class;

    protected $repository = UserRepository::class;

    protected $resourceName = "personal-data";

    /**
     * Get redirection route.
     *
     * @return string
     */
    public function getRedirectionRoute()
    {
        return "home";
    }
}
