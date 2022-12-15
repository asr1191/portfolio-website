import comments from 'MOCK_DATA.json'

export default function GuestComment() {
    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.time} className='p-4 mt-4 rounded-lg bg-ht-gray-800'>
                    <p className='text-2xl text-ht-gray-500'>{comment.content}</p>
                    <p><span className='mt-4 text-gray-500'>{comment.name}</span><span className='mt-4 ml-4 text-gray-700'>/ {comment.time}</span></p>
                </div>
            ))}
        </div>
    )
}

// for comment in comments:
//     print(comment.name)
//
// commments.map()