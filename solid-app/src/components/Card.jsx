export default function Card(props) {
  return (
    <div
      class='bg-white p-4 text-center'
      classList={{ 'rounded-md': props.rounded, 'shadow-sm': !props.flat }}
    >
      {props.children}
    </div>
  );
}
