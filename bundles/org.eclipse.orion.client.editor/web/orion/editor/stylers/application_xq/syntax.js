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
define("orion/editor/stylers/application_xq/syntax", ["orion/editor/stylers/lib/syntax"], function(mLib) { //$NON-NLS-1$ //$NON-NLS-0$
	var keywords = [
		"helloworld", 
		"if",
		"then",
		"else",
		"eq", "ne", "lt", "le", "gt", "ge","@",
		"let", 
		"doc", 
		"order by", 
		"for",
		"in", 
		"where",
		"return",
		"and",
		"to"
	];

	var grammars = mLib.grammars;
	grammars.push({
		id: "orion.xq", //$NON-NLS-0$
		contentTypes: ["application/xq"], //$NON-NLS-0$ // Connection to xqPlugin.js
		patterns: [
			{include: "#comment"},
			{include: "#variable"},
			{include: "orion.xml#tag"}, 
			{include: "orion.lib#string_doubleQuote"}, //$NON-NLS-0$
			{include: "orion.lib#string_singleQuote"}, //$NON-NLS-0$
			{include: "orion.lib#brace_open"}, //$NON-NLS-0$
			{include: "orion.lib#brace_close"}, //$NON-NLS-0$
			{include: "orion.lib#bracket_open"}, //$NON-NLS-0$
			{include: "orion.lib#bracket_close"}, //$NON-NLS-0$
			{include: "orion.lib#parenthesis_open"}, //$NON-NLS-0$
			{include: "orion.lib#parenthesis_close"}, //$NON-NLS-0$
			{
				match: "\\b(?:" + keywords.join("|") + ")\\b", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
				name: "keyword.control.js" //$NON-NLS-0$
			}
		],
		repository: {
			
			comment: {
				begin: "\\(:", //$NON-NLS-0$
				end: ":\\)", //$NON-NLS-0$ 
				name: "comment.block.xq", //$NON-NLS-0$
				patterns: [
					{
						match: "(\\b)(TODO)(\\b)(((?!:\\)).)*)", //$NON-NLS-0$ // match: "(\\b)(TODO)(\\b)(((?!-->).)*)", //$NON-NLS-0$
						name: "meta.annotation.task.todo", //$NON-NLS-0$
						captures: {
							2: {name: "keyword.other.documentation.task"}, //$NON-NLS-0$
							4: {name: "comment.block"} //$NON-NLS-0$
						}
					}
				]
			},
			variable: {
				match: "\\$[a-zA-z0-9_]+",
				name: "varXq.xq" 
			}
		}

	});
	return {
		id: grammars[grammars.length - 1].id,
		grammars: grammars,
		keywords: keywords
	};
});
