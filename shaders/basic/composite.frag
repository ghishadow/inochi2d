/*
    Copyright © 2020, Inochi2D Project
    Distributed under the 2-Clause BSD License, see LICENSE file.
    
    Authors: Luna Nielsen
*/
#version 130
varying vec2 texUVs;

uniform sampler2D tex;
uniform float opacity;
uniform vec3 tint;

void main() {
    gl_FragColor = texture(tex, texUVs) * vec4(tint.xyz, 1) * opacity;
}