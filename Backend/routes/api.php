<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WriterController;
use App\Http\Controllers\FavoritController;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/writers', [WriterController::class, 'index']);
Route::get('/writers/create', [WriterController::class, 'create']);
Route::post('/writers', [WriterController::class, 'store']);
Route::get('/writers/{id}', [WriterController::class, 'show']);
Route::get('/writers/{id}/edit', [WriterController::class, 'edit']);
Route::put('/writers/{id}', [WriterController::class, 'update']);
Route::delete('/writers/{id}', [WriterController::class, 'destroy']);



Route::prefix('favorits')->group(function () {
    Route::get('/', [FavoritController::class, 'index']);
    Route::get('/{id}', [FavoritController::class, 'show']);
    Route::post('/', [FavoritController::class, 'store']);
    Route::delete('/{id}', [FavoritController::class, 'destroy']);

});

Route::get('/books', [BookController::class, 'index'])->name('books.index');
