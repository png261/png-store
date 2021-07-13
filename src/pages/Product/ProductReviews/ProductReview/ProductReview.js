import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Avatar from 'src/components/Avatar/Avatar';
import db, { COLLECTION_IDS } from 'src/firebase/firebase';
import {
	ReviewActions,
	ReviewAvatar,
	ReviewContent,
	ReviewEdit,
	ReviewInfo,
	ReviewInner,
	ReviewText,
	Votes,
	Wrapper,
} from './ProductReview.styles';

const ProductReview = ({ review: { id, uid, contents, timestamp, votes } }) => {
	const [reviewer, setReviewer] = useState({});
	const [isEdit, setIsEdit] = useState(false);
	const [editText, setEditText] = useState(contents[0]);

	const { productId } = useParams();
	const userId = useSelector((state) => state.user?.uid);
	const isOwner = userId === uid;

	const countVote = () => {
		return Object.entries(votes).reduce(
			(count, [voteUid, vote]) => count + vote,
			0
		);
	};

	const voteCount = countVote();
	const votedValue = votes[userId];
	timestamp = new Date(timestamp.seconds * 1000).toDateString();

	const reviewDoc = db
		.collection(COLLECTION_IDS.PRODUCTS)
		.doc(productId)
		.collection(COLLECTION_IDS.PRODUCT_REVIEWS)
		.doc(id);

	useEffect(() => {
		db.collection(COLLECTION_IDS.USERS)
			.doc(uid)
			.onSnapshot((snapshot) => setReviewer({ ...snapshot.data() }));
	}, [uid]);

	const deleteReview = () => {
		reviewDoc.delete();
	};
	const onChangeEditTextarea = (e) => setEditText(e.target.value);
	const updateReview = () => {
		if (!editText || userId !== uid) return deleteReview();

		reviewDoc.update({ contents: [editText, ...contents] });
		setIsEdit(false);
	};
	const cancelEdit = () => {
		setIsEdit((state) => !state);
		setEditText(contents[0]);
	};

	const voteReview = (n) => {
		if (votedValue === n) n = 0;

		reviewDoc.update({
			votes: {
				[userId]: n,
			},
		});
	};
	const upVote = () => voteReview(1);
	const downVote = () => voteReview(-1);
	const toggleEdit = () => setIsEdit((state) => !state);

	return (
		<Wrapper>
			<Votes>
				<button
					onClick={upVote}
					className={votedValue === 1 ? 'active' : ''}
					disabled={!userId}
				>
					<i class="fa fa-caret-up"></i>
				</button>
				<span>{voteCount}</span>
				<button
					onClick={downVote}
					className={votedValue === -1 ? 'active' : ''}
					disabled={!userId}
				>
					<i class="fa fa-caret-down"></i>
				</button>
			</Votes>
			<ReviewInner>
				<ReviewAvatar>
					<Avatar
						src={reviewer.userAvatar}
						title={reviewer.userName}
						size={50}
					/>
				</ReviewAvatar>
				<ReviewInfo>
					<span>{reviewer?.userName}</span>
					<span className="time">{timestamp}</span>
					{!isOwner && contents.length > 1 && <span>Edited</span>}
					{isOwner && (
						<ReviewActions className="actions">
							<button onClick={toggleEdit}>Edit</button>
							<button class="text-danger" onClick={deleteReview}>
								Delete
							</button>
						</ReviewActions>
					)}
				</ReviewInfo>
				<ReviewContent>
					{isEdit ? (
						<ReviewEdit>
							<textarea
								type="text"
								value={editText}
								onChange={onChangeEditTextarea}
							/>
							<button onClick={updateReview}>Change</button>
							<button
								onClick={cancelEdit}
								className="text-danger"
							>
								Cancel
							</button>
						</ReviewEdit>
					) : (
						<ReviewText>{contents[0]}</ReviewText>
					)}
				</ReviewContent>
			</ReviewInner>
		</Wrapper>
	);
};

export default ProductReview;
