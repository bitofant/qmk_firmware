/* Copyright 2023 ZSA Technology Labs, Inc <@zsa>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
#pragma once

#ifdef AUDIO_ENABLE
#    ifndef STARTUP_SONG
#        define MOONLANDER_DEFAULT_STARTUP_SONG SONG(E__NOTE(_DS5), E__NOTE(_D5), E__NOTE(_AS4), Q__NOTE(_F5))
#        define SUPER_MARIO_POWER_UP SONG(E__NOTE(_G5),E__NOTE(_B5),E__NOTE(_D6),E__NOTE(_G6),E__NOTE(_B6),E__NOTE(_GS5),E__NOTE(_C6),E__NOTE(_DS6),E__NOTE(_GS6),E__NOTE(_C7),E__NOTE(_A5),E__NOTE(_D6),E__NOTE(_F6),E__NOTE(_A6),E__NOTE(_D7))
#        define STARTUP_SONG SUPER_MARIO_POWER_UP
#    endif

#    ifndef GOODBYE_SONG
#        define GOODBYE_SONG SONG(E__NOTE(_D5), E__NOTE(_F5), E__NOTE(_C5), Q__NOTE(_AS4))
#    endif
#endif
