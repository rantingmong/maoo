package net.rantingmong.maoo.ui.sample.holder.view

import android.content.Context
import android.util.AttributeSet
import androidx.constraintlayout.widget.ConstraintLayout
import kotlinx.android.synthetic.main.holder_view_feed_post.view.*
import net.rantingmong.maoo.R

class FeedViewPost(context: Context, attrs: AttributeSet?) : ConstraintLayout(context, attrs) {
  init {
    inflate(context, R.layout.holder_view_feed_post, this)

    holder_view_feed_post_content.text = "The Quick brown fux"
  }
}
