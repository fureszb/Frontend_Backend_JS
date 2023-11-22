<?php

namespace App\Http\Controllers;

use App\Models\Favorit; // Módosítva: Használja a Favorit modellt
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FavoritController extends Controller
{
    public function index()
    {
        $favorits = Favorit::all();
        return response()->json($favorits);
    }

    public function show($id)
    {
        $favorit = Favorit::find($id);

        if (!$favorit) {
            return response()->json(['message' => 'A kedvenc nem található.'], 404);
        }

        return response()->json($favorit);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nev' => 'required|string',
            'szul' => 'required|integer',
        ]);

        $favorit = Favorit::create([
            'nev' => $validatedData['nev'],
            'szul' => $validatedData['szul'],
        ]);

        return response()->json($favorit, 201);
    }

    public function destroy($id)
    {
        $favorit = Favorit::find($id);

        if (!$favorit) {
            return response()->json(['message' => 'A kedvenc nem található.'], 404);
        }

        $favorit->delete();

        return response()->json(['message' => 'A kedvenc sikeresen törölve.']);
    }
}
