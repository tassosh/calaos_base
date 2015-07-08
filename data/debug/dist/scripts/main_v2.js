"use strict";function getHTML(a){if(window.XMLHttpRequest){var b=new XMLHttpRequest;b.open(a,$("#urlinput").val(),!0),b.onreadystatechange=function(){4===b.readyState&&($("#answer").html(200===b.status?JSON.stringify(JSON.parse(b.responseText),null,"    "):"Error "+b.status),$("pre code").each(function(a,b){hljs.highlightBlock(b)}))},b.send(document.commandform.messagebody.value)}return!1}var apiList=["{ }",'{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "get_home" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "get_state", "inputs": ["input_0"], "outputs": ["output_0", "output_1"], "audio_players": ["0"] }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "get_states", "type": "input", "id": "input_0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "query", "type": "input", "id": "input_0", "param": "input_sources" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "get_param", "type": "input", "id": "input_0", "param": "name" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "set_param", "type": "input", "id": "input_0", "param": "name", "value": "New name" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "del_param", "type": "input", "id": "input_0", "param": "param_to_delete" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "get_timerange", "id": "input_0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "set_timerange", "id": "input_0", "months": "000000000000", "ranges": [ { "day": "1", "start_hour": "12", "start_min": "0", "start_sec": "0", "start_type": "0", "start_offset": "1", "end_hour": "13", "end_min": "30", "end_sec": "0", "end_type": "0", "end_offset": "1" } ] }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "get_io", "inputs": ["input_0"], "outputs": ["output_0", "output_1"] }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "set_state", "type": "output", "id": "output_0", "value": "true" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "set_state", "type": "input", "id": "input_0", "value": "true" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "set_state", "type": "audio", "player_id": "0", "value": "volume 75" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "set_state", "type": "camera", "camera_id": "0", "camera_action": "move", "value": "left" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "get_playlist", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "poll_listen", "type": "register" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "poll_listen", "type": "unregister", "uuid": "XXX" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "poll_listen", "type": "get", "uuid": "XXX" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "config", "type": "get" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "config", "type": "put", "config_files": { "io.xml": "<xml ...... >", "rules.xml": "<xml ...... >" } }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_stats", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio", "audio_action": "get_playlist_size", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio", "audio_action": "get_time", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio", "audio_action": "get_playlist_item", "item": "0", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio", "audio_action": "get_cover_url", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_albums", "from": "0", "count": "1", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_artists", "from": "0", "count": "1", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_years", "from": "0", "count": "1", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_genres", "from": "0", "count": "1", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_playlists", "from": "0", "count": "1", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_music_folder", "from": "0", "count": "1", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_search", "from": "0", "count": "1", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_radios", "from": "0", "count": "1", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_radio_items", "from": "0", "count": "1", "radio_id": "0", "item_id": "1", "search": "", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_artist_album", "from": "0", "count": "1", "artist_id": "0", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_year_albums", "from": "0", "count": "1", "year": "0", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_genre_artists", "from": "0", "count": "1", "genre": "0", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_album_titles", "from": "0", "count": "1", "album_id": "0", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_playlist_titles", "from": "0", "count": "1", "playlist_id": "0", "player_id": "0" }','{ "cn_user": "USERNAME", "cn_pass": "PASSWORD", "action": "audio_db", "audio_action": "get_track_infos", "from": "0", "count": "1", "track_id": "0", "player_id": "0" }'];$(document).ready(function(){var a=0;$("#api_list").append($("<option />").val(a++).html("Custom request"));for(var b=1;b<apiList.length;b++){var c=JSON.parse(apiList[b]).action;("set_state"==c||"poll_listen"==c||"config"==c)&&(c=c+" "+JSON.parse(apiList[b]).type),("audio"==c||"audio_db"==c)&&(c=c+" "+JSON.parse(apiList[b]).audio_action),$("#api_list").append($("<option />").val(a++).html(c))}$("#api_list").change(function(){var a=$("#api_list option:selected").val(),b=apiList[parseInt(a)];""!=$("#username").val()&&(b=b.replace("USERNAME",$("#username").val())),""!=$("#passwd").val()&&(b=b.replace("PASSWORD",$("#passwd").val())),$("#message").val(JSON.stringify(JSON.parse(b),null,"    "))})});