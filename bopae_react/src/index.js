import React from 'react'
import ReactDOM from 'react-dom'
import BopaeList from './BopaeList'
import './styles/index.css'

var db = [
	{
		name: 'asdasdasd',
		icon: 'http://www.petmd.com/sites/all/modules/breedopedia/images/thumbnails/cat/tn-sokoke-forest-cat.jpg'
	},
	{
		name: 'tugjkt',
		icon: 'http://www.petmd.com/sites/all/modules/breedopedia/images/thumbnails/cat/tn-california-spangled-cat.jpg'
	},
	{
		name: '234sfe',
		icon: 'https://yt3.ggpht.com/-Uqwr0hWfOic/AAAAAAAAAAI/AAAAAAAAAAA/Rip1vis4UrM/s100-c-k-no-mo-rj-c0xffffff/photo.jpg'
	},
	{
		name: 'r6u45gs',
		icon: 'https://yt3.ggpht.com/-NgPmviLgPV4/AAAAAAAAAAI/AAAAAAAAAAA/SVo8zF6Gp3I/s100-c-k-no-mo-rj-c0xffffff/photo.jpg'
	},
]


ReactDOM.render(
	<BopaeList db={db}/>,
	document.getElementById('root')
);
