import { Toaster,resolveValue  } from "react-hot-toast";

const Toast = () => {
  return (
      <Toaster >
        {
            (t)=>(
                <div>
                    <h1>asd</h1>
                    <h1>{resolveValue(t.message,t)}</h1>
                </div>
            )
        }

      </Toaster>
  );
};

export default Toast;
