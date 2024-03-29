/*
 * File: app/view/contacts/InfoPanel.js
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

Ext.define('ContactManagerModule.view.contacts.InfoPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contacts.infopanel',

    requires: [
        'ContactManagerModule.view.contacts.InfoPanelViewModel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    viewModel: {
        type: 'contacts.infopanel'
    },
    frame: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    dockedItems: [
        {
            xtype: 'panel',
            flex: 1,
            dock: 'top',
            height: 125,
            dockedItems: [
                {
                    xtype: 'panel',
                    dock: 'left',
                    html: '<div style="width: 45px;height: 45px;padding: 12.5px 12.5px;border-radius: 50%;background-color: #5fa2dd;color: #0000007a;"><h1 style="display: unset;">G</h1></div>',
                    margin: 10,
                    padding: 10
                },
                {
                    xtype: 'panel',
                    dock: 'left',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    dockedItems: [
                        {
                            xtype: 'panel',
                            dock: 'left',
                            html: '<div style="font-size: x-large;"><p>Gregg Gillson</p></div>',
                            maxHeight: 50,
                            width: 145
                        },
                        {
                            xtype: 'panel',
                            flex: 1,
                            dock: 'bottom',
                            html: '<div><b>Rev at </b><b style="color: #0000ffad;">Eabox</b></div>'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    dock: 'bottom',
                    height: 40,
                    html: '<div style="margin: 10px 0 0 85px;font-size: 14px;"><span style="color: #0000ffad;">igillson0@imageshack.us</span><span> (225) 7562539 (405) 8831857</span></div>'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'tabpanel',
            flex: 1,
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    title: 'Summary',
                    items: [
                        {
                            xtype: 'panel',
                            frame: true,
                            height: 130,
                            html: '<div style="margin: 15px;font-size: 16px;"><p>9862 Mifflin Way</p><p>Oklahoma City OK, 73119</p></div>',
                            margin: 10,
                            width: 400,
                            title: 'Address'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Tasks'
                },
                {
                    xtype: 'panel',
                    title: 'Notes'
                }
            ]
        }
    ]

});