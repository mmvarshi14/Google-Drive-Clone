import React from 'react'
import '../../styles/Sidebaritem.css'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
/*import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';
*/
 
const SidebarItem = ({arrow,icon,label}) => {
	return(
		<div className="sidebarItem">
			<div className="sidebarItem__arrow">
			{arrow && <ArrowRightIcon />}
			</div>
			<div className="sidebarItem__main">
			{icon}
			<p>{label}</p>

			</div>

		</div>	
	)
}

export default SidebarItem