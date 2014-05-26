/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
/*global esprima*/
/*jslint amd:true*/
define(['orion/plugin', 'orion/editor/stylers/application_xq/syntax'], function(PluginProvider, mXQ) {	
	/**
	 * Plug-in headers
	 */
	var headers = {
		name: "Orion XQuery Tool Support",
		version: "1.0",
		description: "This plugin provides Xquery tools support for Orion."
	};
	var provider = new PluginProvider(headers);

	/**
	 * Register the XQuery content types
	 */
	provider.registerServiceProvider("orion.core.contenttype", {}, {
		contentTypes: [
			{	id: "application/xq",
				"extends": "text/plain",
				name: "XQ",
				extension: ["xq"]
			}
		] 
	});

	/**
	 * Register syntax styling
	 */
	provider.registerServiceProvider("orion.edit.highlighter", {}, mXQ.grammars[mXQ.grammars.length - 1]);

	provider.connect();
});
