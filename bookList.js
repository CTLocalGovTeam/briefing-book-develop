﻿/*
This file contains list all books with necessary data.
*/

define([], function () {
	return {
		Books: [

    {
    	title: "Esri Briefing Book",
    	authorName: "Kevin Peterson",
    	CoverPage: {
    		layout: "coverPageLayout1",
    		columns: 2,
    		content: [
                [
				    "cv-345762236", // Book title
				    "cv-345762237", // Book subtitle
				    "cv-345762238", // Author
				    "cv-345762239", // Last updated date
				    "cv-345762240", // First Logo
			    ],
			    [
			    "bm-map1345762252" // for map
			    ]
            ]
    	},
    	ContentPage: {
    		layout: "contentsWithMap",  // based on selected layout
    		columns: 2,
    		content: [
				[
					"txt-1345762252",
                    "bm-mapcontent1345762252", //webmap
                    "bm-mapdesc123456789"
				],
				[
					"tc-345762236" // the TOC will be auto generated
		        ]
            ]
    	},

    	BookPages: [
		{
			layout: "mostlyText",
			title: "Mostly Text Layout",
			columns: 2,
			content: [
				[
					"bm-1345762252",
				],
				[
					"bm-1345762236",
				]
			]
		},
        {
        	layout: "mostlyVisual",
        	title: "Mostly Visual Layout 1",
        	columns: 1,
        	content: [
        				[
        					"bm-1345762252",
        					"bm-1345762236"
        				]
        			]
        },
        {
        	layout: "mostlyVisual",
        	title: "Mostly Visual Layout 2",
        	columns: 1,
        	content: [
        				[
        					"bm-mapcontent1345762252",
        					"bm-1345762236"
        				]
        			]
        }
	]
    },
    {
    	title: "Book 1",
    	authorName: "Kevin Peterson"
    },
    {
    	title: "Book 2",
    	authorName: "Kevin Peterson"
    },
    {
    	title: "Book 3",
    	authorName: "Kevin Peterson"
    },
    {
    	title: "Book 4",
    	authorName: "Kevin Peterson"
    },
    {
    	title: "Book 5",
    	authorName: "Kevin Peterson"
    },
    {
    	title: "Book 6",
    	authorName: "Kevin Peterson"
    },
    {
    	title: "Book 7",
    	authorName: "Kevin Peterson"

    },
    {
    	title: "Book 8",
    	authorName: "Kevin Peterson"

    },
    {
    	title: "Book 9",
    	authorName: "Kevin Peterson"

    }

]
	}
});