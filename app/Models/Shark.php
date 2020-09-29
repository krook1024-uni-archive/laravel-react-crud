<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Shark
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property int $shark_level
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Shark newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shark newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shark query()
 * @method static \Illuminate\Database\Eloquent\Builder|Shark whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shark whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shark whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shark whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shark whereSharkLevel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shark whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Shark extends Model
{
    use HasFactory;
}
