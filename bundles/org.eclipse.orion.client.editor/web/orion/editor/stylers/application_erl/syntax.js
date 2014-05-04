/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/

/*global define*/

define("orion/editor/stylers/application_erl/syntax", ["orion/editor/stylers/lib/syntax"], function(mLib) { //$NON-NLS-1$ //$NON-NLS-0$
	var keywords = [
		"fun",
		"when",
		"end",
		"receive",
		"case", 
		"of",
		"if",
		"after",
		"catch",
		"try",
		"begin", 
		"orelse",
		"andalso"

	];

	// For Preprocessors, Records and so on specified with hyphens
	var hyphenStuff = [
		"module",
		"export",
		"import",
		"compile",
		"vsn",
		"on_load",
		"spec",
		"record",
		"include",
		"include_lib",
		"define",
		"file",
		"type",
		"opaque",
		"export_type",
		"undef",
		"ifdef",
		"ifndef",
		"else",
		"endif"
	];

	var signs = [
		"#",
		":",
		"::"
	];

	var grammars = mLib.grammars;
	grammars.push({
		id: "orion.erl", //$NON-NLS-0$
		contentTypes: ["application/erl"], //$NON-NLS-0$ // Connection to erlPlugin.js
		patterns: [
			{include: "#comment"},
			{include: "#arrow"},
			{include: "orion.xq#variable"}, 
			{include: "orion.lib#string_doubleQuote"}, //$NON-NLS-0$
			{include: "orion.lib#string_singleQuote"}, //$NON-NLS-0$
			{include: "orion.lib#doc_block"}, //$NON-NLS-0$
			{include: "orion.lib#brace_open"}, //$NON-NLS-0$
			{include: "orion.lib#brace_close"}, //$NON-NLS-0$
			{include: "orion.lib#bracket_open"}, //$NON-NLS-0$
			{include: "orion.lib#bracket_close"}, //$NON-NLS-0$
			{include: "orion.lib#parenthesis_open"}, //$NON-NLS-0$
			{include: "orion.lib#parenthesis_close"}, //$NON-NLS-0$
			{include: "orion.lib#number_decimal"}, //$NON-NLS-0$
			{include: "orion.lib#number_hex"}, //$NON-NLS-0$
			{
				match: "\\b(?:" + keywords.join("|") + ")\\b", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
				name: "keyword.control.js" //$NON-NLS-0$
			},
			{
				match: "-\\b(?:" + hyphenStuff.join("|") + ")\\b", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
				name: "hyphen.erl" //$NON-NLS-0$
			},
			{
				match: signs.join("|"),
				name: "sign.erl"
			}
		],
		repository: {
			
			comment: {
				match: "%.*", //$NON-NLS-0$
				name: "comment.line.erl", //$NON-NLS-0$
				patterns: [
					{
						include: "orion.lib#todo_comment_singleLine" //$NON-NLS-0$
					}
				]
			},
			arrow: {
				match: "->|=>", //$NON-NLS-0$
				name: "arrow.erl" //$NON-NLS-0$
			},
			method: {
				match: "[a-zA-Z0-9_.]+(?=\\(|\\s\\()",
			    name: "method.erl"
			}
		}

	});
	return {
		id: grammars[grammars.length - 1].id,
		grammars: grammars,
		keywords: keywords
	};
});
