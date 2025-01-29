<?php

namespace App\Http\Controllers;

use App\Mail\JobPosted;
use Illuminate\Http\Request;
use App\Models\Job;
use Illuminate\Support\Facades\Mail;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $jobs = Job::with('employer')->latest()->get();

        return response()->json([
            'jobs' => $jobs
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store()
    {
        //  dd(request() -> all('title'));

        request()->validate([
            'title' => ['required', 'min:3'],
            'salary' => ['required']
        ]);

        $job = Job::create([
            'title' => request('title'),
            'salary' => request('salary'),
        ]);

        return response()->json(['message' => 'Job created successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Job $job)
    {
        $job->load('employer');
        return response()->json([
            'job' => $job,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Job $job)
    {
        request()->validate([
            'title'  => ['required', 'min:3'],
            'salary' => ['required'],
            'employer_id' => ['exists:employers,id']
        ]);

        $job->update([
            'title'  => request('title'),
            'salary' => request('salary'),
            'employer_id' => request('employer_id')
        ]);

        return response()->json([
            'message' => 'Job updated successfully!',
            'job'     => $job->load('employer')
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return void
     */

    public function destroy(Job $job)
    {
        $job->delete();
    }
}
