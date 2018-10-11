<?php

namespace Raffles\Http\Controllers;

use Raffles\Http\Requests\AvatarRequest;
use Raffles\Repositories\UserRepository;

use RafflesArgentina\ResourceController\ResourceController;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

class AvatarController extends ResourceController
{
    protected $formRequest = AvatarRequest::class;

    protected $repository = UserRepository::class;

    protected $resourceName = "avatar";

    /**
     * Get redirection route.
     *
     * @return string
     */
    public function getRedirectionRoute()
    {
        return "home";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request The request object.
     * @param string  $key     The model key.
     *
     * @throws ResourceControllerException
     *
     * @return mixed
     */
    public function update(Request $request, $key)
    {
        $this->getFormRequestInstance();

        $model = $this->findFirstByKey($key);

        if (!$model) {
            return $this->validNotFoundJsonResponse();
        }

        try {
            $this->uploadFiles($request, $model);
        } catch (\Exception $e) {
            $message = $this->updateFailedMessage($key, $e->getMessage());
            throw new ResourceControllerException($message);
        }

        $message = $this->updateSuccessfulMessage($key);

        return $this->validSuccessJsonResponse($message);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request The request object.
     * @param string  $key     The model key.
     *
     * @throws ResourceControllerException
     *
     * @return mixed
     */
    public function destroy(Request $request, $key)
    {
        $this->getFormRequestInstance();

        $model = $this->findFirstByKey($key);

        if (!$model) {
            return $this->validNotFoundJsonResponse();
        }

        try {
            \Storage::delete($model->avatar);
        } catch (\Exception $e) {
            $message = $this->destroyFailedMessage($key, $e->getMessage());
            throw new ResourceControllerException($message);
        }

        $message = $this->destroySuccessfulMessage($key);

        return $this->validSuccessJsonResponse($message);
    }

    /**
     * Upload request files and update or create relations handling array type request data.
     *
     * @param Request     $request      The Request object.
     * @param Model       $model        The eloquent model.
     * @param string|null $relativePath The file uploads relative path.
     *
     * @return void
     */
    public function uploadFiles(Request $request, Model $model, $relativePath = null)
    {
        \Storage::delete($model->avatar);

        if (!$relativePath) {
            $relativePath = $this->getDefaultRelativePath();
        }

        $uploadedFile = $request->file('file');

        if ($uploadedFile) {
            $filename = $this->getFilename($uploadedFile);

            $destination = $this->getStoragePath($relativePath);

            $this->moveUploadedFile($uploadedFile, $filename, $destination);

            $location = $relativePath.$filename;

            $this->repository->update($model->id, ['avatar' => $location]);
        }
    }
}
