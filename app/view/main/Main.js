/*
 * File: app/view/main/Main.js
 *
 * This file was generated by Sencha Architect version 4.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ContactManagerModule.view.main.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main.main',

    requires: [
        'ContactManagerModule.view.main.MainViewModel',
        'ContactManagerModule.view.contacts.ListPanel',
        'Ext.panel.Panel'
    ],

    viewModel: {
        type: 'main.main'
    },

    layout: {
        type: 'vbox',
        align: 'center'
    },
    items: [
        {
            xtype: 'panel',
            flex: 1,
            width: '100%',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'panel',
                    flex: 1,
                    title: 'My Contacts',
                    items: [
                        {
                            xtype: 'contacts.listpanel'
                        }
                    ]
                }
            ]
        }
    ]

});