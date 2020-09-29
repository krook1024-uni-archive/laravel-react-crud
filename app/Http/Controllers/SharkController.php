<?php

namespace App\Http\Controllers;

use App\Http\Resources\SharkResource;
use App\Models\Shark;
use App\Http\Resources\SharkCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SharkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return new SharkCollection(Shark::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'shark_level' => 'required|numeric',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return ['errors' => $validator->errors()];
        }

        $shark = new Shark();

        $shark->name = $request->get('name');
        $shark->email = $request->get('email');
        $shark->shark_level = $request->get('shark_level');

        $shark->save();

        return new SharkResource($shark);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Shark  $shark
     * @return \Illuminate\Http\Response
     */
    public function show(Shark $shark)
    {
        return new SharkResource($shark);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Shark  $shark
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Shark $shark)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email',
            'shark_level' => 'required|numeric',
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return ['errors' => $validator->errors()];
        }

        $shark->name = $request->get('name');
        $shark->email = $request->get('email');
        $shark->shark_level = $request->get('shark_level');

        $shark->save();

        return new SharkResource($shark);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Shark  $shark
     * @return \Illuminate\Http\Response
     */
    public function destroy(Shark $shark)
    {
        $shark->delete();
        return [];
    }
}
