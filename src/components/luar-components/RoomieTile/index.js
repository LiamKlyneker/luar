import React from 'react';
import cx from 'classnames';

const RoomieTile = ({ data: { img, fullName, yearsOld, lookingIn } }) => {
	return (
		<a href="/other" className={cx('roomie-tile')}>
			<figure>
				<img src={img} alt="room/ie" />
			</figure>
			<footer>
				<p className={cx('roomie-tile__full-name')}>
					{fullName} <small>{yearsOld}yrs</small>
				</p>
				<p className={cx('roomie-tile__looking')}>
					— <span>Looking in</span> {lookingIn}
				</p>
			</footer>
		</a>
	);
};

export default RoomieTile;
