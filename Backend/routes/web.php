<?php

use App\Http\Controllers\WriterController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/writers', [WriterController::class, 'index']);
Route::get('/writers/create', [WriterController::class, 'create']);
Route::post('/writers', [WriterController::class, 'store']);
Route::get('/writers/{id}', [WriterController::class, 'show']);
Route::get('/writers/{id}/edit', [WriterController::class, 'edit']);
Route::put('/writers/{id}', [WriterController::class, 'update']);
Route::delete('/writers/{id}', [WriterController::class, 'destroy']);
